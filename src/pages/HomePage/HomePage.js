import React from 'react';
import { Navbar } from '../../components';
import { StandardNavPage } from '../../components/Page';
import { InputComponent, TextAreaComponent } from '../../components/Input';
import { NormalButton, ActionButton, Nav } from '../../components/Button';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <StandardNavPage>
        <div style={{ margin: '130px 0 20px 20px' }}>DemoPage (HomePage)</div>
        <div style={{ margin: '20px' }}>
          <NormalButton $margin={0}>空心按鈕</NormalButton>
          <NormalButton $margin={0}>空心按鈕</NormalButton>
          <NormalButton $margin={0}>空心按鈕</NormalButton>
          <NormalButton $margin={0}>空心按鈕</NormalButton>
          <NormalButton $margin={0}>空心按鈕</NormalButton>
          <NormalButton $margin={0}>空心按鈕</NormalButton>
          <NormalButton $margin={0}>空心按鈕</NormalButton>
        </div>
        <div style={{ margin: '20px' }}>
          <ActionButton $margin={0}>實心按鈕</ActionButton>
          <ActionButton $margin={0}>實心按鈕</ActionButton>
          <ActionButton $margin={0}>實心按鈕</ActionButton>
          <ActionButton $margin={0} $bg={'red'}>
            實心按鈕
          </ActionButton>
          <ActionButton $margin={0} $bg={'red'}>
            實心按鈕
          </ActionButton>
          <ActionButton $margin={0} $bg={'red'}>
            實心按鈕
          </ActionButton>
        </div>
        <div style={{ margin: '20px' }}>
          <ActionButton $margin={0} $size={'lg'}>
            實心按鈕
          </ActionButton>
          <ActionButton $margin={0} $size={'lg'}>
            實心按鈕
          </ActionButton>
          <ActionButton $margin={0} $size={'lg'} $bg={'red'}>
            實心按鈕
          </ActionButton>
          <ActionButton $margin={0} $size={'lg'} $bg={'red'}>
            實心按鈕
          </ActionButton>
        </div>
        <div>
          <Nav children={'連結按鈕'} path={'/success'} />
        </div>
        <div style={{ margin: '20px' }}>
          <InputComponent $size={''} $margin={0} />
        </div>
        <div style={{ margin: '20px' }}>
          <InputComponent $size={'lg'} $margin={0} />
        </div>
        <div style={{ margin: '20px' }}>
          <TextAreaComponent $size={''} $margin={0} rows='15' />
        </div>
        <div style={{ margin: '20px' }}>
          <TextAreaComponent $size={'lg'} $margin={0} rows='15' />
        </div>
      </StandardNavPage>
    </>
  );
};

export default HomePage;
