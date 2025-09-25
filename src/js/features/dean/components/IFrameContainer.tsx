import { Loading } from "@opendash/core";
import { Alert, Button, Card, Space, Typography } from "antd";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";

const { Title, Text, Paragraph } = Typography;

type Props = {
  src?: string;
  title?: string;
  width?: string | number;
  height?: string | number;
  allowFullScreen?: boolean;
  sandbox?: string;
  fallbackMode?: boolean;
  // JWT Authentication options
  jwtToken?: string;
  jwtParameterName?: string; // e.g., "token", "jwt", "access_token"
  authMethod?: "url-param" | "postmessage" | "both";
  onAuthSuccess?: () => void;
  onAuthError?: (error: string) => void;
};

export const IFrameContainer = observer((props: Props) => {
  const {
    src = "https://sam-wizard.nuspace.io/login",
    title = "SAM Wizard",
    width = "100%",
    height = "600px",
    allowFullScreen = true,
    sandbox = "allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation",
    fallbackMode = false,
    // JWT Authentication
    jwtToken,
    jwtParameterName = "jwt",
    authMethod = "url-param",
    onAuthSuccess,
    onAuthError,
  } = props;

  const [loading, setLoading] = useState(!fallbackMode);
  const [error, setError] = useState<string | null>(null);
  const [showFallback, setShowFallback] = useState(fallbackMode);
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null);
  const [authAttempted, setAuthAttempted] = useState(false);

  // Build the iframe URL with JWT token if provided
  const buildIframeUrl = (baseUrl: string, token?: string): string => {
    if (!token || authMethod === "postmessage") {
      return baseUrl;
    }

    const url = new URL(baseUrl);
    url.searchParams.set(jwtParameterName, token);
    return url.toString();
  };

  const iframeSrc = buildIframeUrl(src, jwtToken);

  const handleLoad = () => {
    setLoading(false);

    // Send JWT via postMessage if configured
    if (
      jwtToken &&
      (authMethod === "postmessage" || authMethod === "both") &&
      iframeRef &&
      !authAttempted
    ) {
      setAuthAttempted(true);

      try {
        const authMessage = {
          type: "AUTH_TOKEN",
          token: jwtToken,
          parameterName: jwtParameterName,
          timestamp: Date.now(),
          targetUrl: src, // Include the specific URL being authenticated against
        };

        // Send authentication message to iframe
        iframeRef.contentWindow?.postMessage(jwtToken, new URL(src).origin);

        console.log("JWT token sent via postMessage to iframe", {
          token: jwtToken,
          origin: new URL(src).origin,
          targetUrl: src,
          parameterName: jwtParameterName,
        });

        onAuthSuccess?.();
      } catch (err) {
        console.error("Failed to send JWT via postMessage:", err);
        onAuthError?.("Failed to send authentication token to iframe");
      }
    }
  };

  const handleError = () => {
    setLoading(false);
    setError(
      "The external service cannot be embedded due to security restrictions (X-Frame-Options). This is normal and expected behavior."
    );
    setShowFallback(true);
  };

  const openInNewTab = () => {
    window.open(src, "_blank", "noopener,noreferrer");
  };

  const retry = () => {
    setError(null);
    setLoading(true);
    setShowFallback(false);
    setAuthAttempted(false);

    // Use the iframe ref if available, otherwise fallback to querySelector
    const iframe =
      iframeRef ||
      (document.querySelector(
        'iframe[title="' + title + '"]'
      ) as HTMLIFrameElement);
    if (iframe) {
      iframe.src = "";
      setTimeout(() => {
        iframe.src = buildIframeUrl(src, jwtToken); // Use updated URL with current token
      }, 100);
    }
  };

  // Method to refresh authentication with a new token
  const refreshAuth = (newToken: string) => {
    if (iframeRef) {
      try {
        const authMessage = {
          type: "AUTH_TOKEN_REFRESH",
          token: newToken,
          parameterName: jwtParameterName,
          timestamp: Date.now(),
          targetUrl: src, // Include the specific URL being authenticated against
        };

        iframeRef.contentWindow?.postMessage(authMessage, new URL(src).origin);

        console.log("JWT token refresh sent via postMessage", {
          origin: src,
          targetUrl: src,
          parameterName: jwtParameterName,
        });
      } catch (err) {
        console.error("Failed to refresh JWT via postMessage:", err);
        onAuthError?.("Failed to refresh authentication token");
      }
    }
  };

  useEffect(() => {
    if (!fallbackMode) {
      setLoading(true);
      setError(null);
      setShowFallback(false);
      setAuthAttempted(false);
    }
  }, [src, fallbackMode, jwtToken]);

  // Listen for messages from iframe (e.g., authentication success/failure)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Verify origin for security
      if (event.origin !== new URL(src).origin) {
        return;
      }

      console.log("Received message from iframe:", event);

      if (event.data?.type === "AUTH_SUCCESS") {
        console.log("Authentication successful in iframe");
        onAuthSuccess?.();
      } else if (event.data?.type === "AUTH_ERROR") {
        console.error("Authentication failed in iframe:", event.data.message);
        onAuthError?.(event.data.message || "Authentication failed");
      } else if (event.data?.type === "AUTH_REQUEST") {
        // Iframe is requesting authentication
        if (jwtToken && iframeRef) {
          const authMessage = {
            type: "AUTH_TOKEN",
            token: jwtToken,
            parameterName: jwtParameterName,
            timestamp: Date.now(),
            targetUrl: src, // Include the specific URL being authenticated against
          };
          iframeRef.contentWindow?.postMessage(jwtToken, event.origin);
        }
      }
    };

    const handleMessageError = (event: MessageEvent) => {
      // Verify origin for security
      if (event.origin !== new URL(src).origin) {
        return;
      }

      console.error("Message error from iframe:", event);
    };

    window.addEventListener("message", handleMessage);

    window.addEventListener("messageerror", handleMessageError);

    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("messageerror", handleMessageError);
    };
  }, [src, jwtToken, jwtParameterName, iframeRef, onAuthSuccess, onAuthError]);

  if (showFallback || error) {
    return (
      <Card
        style={{
          width: "100%",
          height,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            padding: "40px 20px",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              color: "#faad14",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            ⚠️
          </div>

          <Title level={3} style={{ marginBottom: "16px" }}>
            {title} - External Access Required
          </Title>

          <Paragraph style={{ marginBottom: "24px", maxWidth: "500px" }}>
            This service cannot be embedded directly due to security
            restrictions. You can access the full functionality by opening it in
            a new tab.
          </Paragraph>

          {error && (
            <Alert
              message="Embedding Blocked"
              description={error}
              type="warning"
              showIcon
              style={{ marginBottom: "24px", maxWidth: "500px" }}
            />
          )}

          <Space size="large">
            <Button type="primary" size="large" onClick={openInNewTab}>
              🔗 Open SAM Wizard in New Tab
            </Button>

            <Button size="large" onClick={retry}>
              🔄 Try Embedding Again
            </Button>
          </Space>

          <div style={{ marginTop: "24px", opacity: 0.7 }}>
            <Text type="secondary">URL: {src}</Text>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%", height }}>
      {loading && <Loading message={undefined} />}

      <iframe
        ref={setIframeRef}
        src={iframeSrc}
        title={title}
        width={width}
        height={height}
        allowFullScreen={allowFullScreen}
        sandbox={sandbox}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "6px",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
        referrerPolicy="strict-origin-when-cross-origin"
      />

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
});
