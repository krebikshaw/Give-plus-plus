import React, { useEffect } from 'react';
import styled from 'styled-components';
import useAdmin from '../../hooks/adminHooks/useAdmin';
import { DISTANCE, FONT, COLOR, EFFECT } from '../../constants/style';

const MailListContainer = styled.div`
  margin: ${DISTANCE.md} 0;
`;

const MailItemContainer = styled.div`
  margin: ${DISTANCE.sm} 0;
  padding: ${DISTANCE.sm};
  box-shadow: ${EFFECT.shadowInput};
  border-radius: 15px;
`;

const MailContent = styled.p`
  color: ${COLOR.black};
  font-size: ${FONT.md};
`;

const SenderInfo = styled.div`
  display: flex;
  margin-bottom: ${DISTANCE.xs};
`;

const SenderName = styled.p`
  margin-right: ${DISTANCE.md};
  color: #582020;
`;

const SenderEmail = styled.p``;

const MailItem = ({ mail }) => {
  return (
    <MailItemContainer>
      <SenderInfo>
        <SenderName>{mail.name}</SenderName>
        <SenderEmail>{mail.email}</SenderEmail>
      </SenderInfo>
      <MailContent>{mail.content}</MailContent>
    </MailItemContainer>
  );
};

export default function MailListComponent() {
  const { mails, handleGetMails } = useAdmin();

  useEffect(() => {
    handleGetMails();
  }, []);

  useEffect(() => {
    console.log(mails);
  }, [mails]);

  return (
    <MailListContainer>
      {mails.map((mail, index) => (
        <MailItem mail={mail} key={index} />
      ))}
    </MailListContainer>
  );
}
