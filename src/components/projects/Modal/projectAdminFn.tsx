import React from "react";
import styled from "styled-components";

type ProjectAdminFnProps = {
  isAdminFn: boolean;
};

const SpanAdmin = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;

  margin: 1rem 0;

  font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MODERNIST};
  text-align: justify;

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_L};
  }
`;

export default function ProjectAdminFn({ isAdminFn }: ProjectAdminFnProps) {
  return (
    <div>
      {isAdminFn && (
        <SpanAdmin>
          Fell free to create an account using a fake email address or using
          admin account, email: admin@email.com / password: 123 . If the
          application does not show any product, please wait and refresh the
          page.
        </SpanAdmin>
      )}
    </div>
  );
}
