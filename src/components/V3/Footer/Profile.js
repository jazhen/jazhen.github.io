import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";

const Profile = () => (
  <Avatar src="https://avatars.githubusercontent.com/u/6326660?v=4" />
);

const Avatar = styled(Styled.Img)`
  border-radius: var(--border-radius);
`;

export default Profile;
