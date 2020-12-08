import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useUser from '../../hooks/userHooks/useUser';
import { COLOR, FONT, DISTANCE } from '../../constants/style';
import { InputComponent } from '../../components/Input';
import { NormalButton, ActionButton, Nav } from '../../components/Button';

const SetPasswordContainer = styled.div``;

export default function SetPasswordComponent() {
  return (
    <SetPasswordContainer>
      <div>設定密碼</div>
    </SetPasswordContainer>
  );
}
