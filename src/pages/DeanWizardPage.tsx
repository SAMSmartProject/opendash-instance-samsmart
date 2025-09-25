import { useMemoAsync } from "@opendash/core";
import { observer } from "mobx-react-lite";
import Parse from "parse";
import React from "react";
import { IFrameContainer } from "../js/features/dean";

type Props = {};

export const DeanWizardPage = observer((props: Props) => {
  const jwt = useMemoAsync<string>(async () => {
    const result = await Parse.Cloud.run("dean-wizard-jwt");
    console.log("Received JWT token from cloud function", result);
    return result?.token || "";
  }, []);

  return (
    <IFrameContainer
      jwtToken={jwt}
      authMethod="postmessage"
      onAuthError={() => console.error("Authentication failed")}
      onAuthSuccess={() => console.log("Authentication successful")}
    ></IFrameContainer>
  );
});
