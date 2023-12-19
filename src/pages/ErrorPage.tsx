import { Flex } from "antd";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Title } from "../shared/components";
import { TitleType } from "../shared/components/Title";

export function ErrorPage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Flex vertical align={"center"} justify={"center"}>
        <Title type={TitleType.H1}>Oops!</Title>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.status + " " + error.statusText || error.data.message}</i>
        </p>
      </Flex>
    );
  } else {
    return <div>Oops</div>;
  }
}
