import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ThickNavPage } from '../../components/Page';
import { FONT, COLOR } from '../../constants/style';
import { useSelector } from 'react-redux';
import { selectCurrentRule } from '../../redux/slices/generalSlice/generalSlice';

const Navigation = styled.div`
  position: fixed;
  padding: 20px;
  top: 20vh;
  left: 10vw;
  width: 140px;
  background-color: ${COLOR.bg_secondary};
  opacity: 0.7;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #eee;
  transition: all linear 0.2s;
  :hover {
    transition: all linear 0.2s;
    opacity: 1;
    box-shadow: 1px 2px 5px 0px #ddd;
  }
`;

const NavigationTitle = styled.h1`
  margin-bottom: 30px;
  font-size: ${FONT.sm};
  color: ${COLOR.text_1};
`;

const RuleLink = styled.a`
  margin-bottom: 15px;
  font-size: ${FONT.xs};
  color: ${COLOR.text_2};
  :hover {
    color: ${COLOR.hover};
  }
`;

const Container = styled.div`
  margin: 20vh 15vw 0px 15vw;
  padding: 10px;
  max-width: 600px;
  min-width: 300px;
`;

const Rule = styled.div`
  padding: 120px 0 60px;
  margin-top: -120px;
`;

const RuleTitle = styled.h1`
  margin-bottom: 15px;
  font-size: ${FONT.md};
  color: ${COLOR.text_2};
`;

const RuleContent = styled.p`
  line-height: 1.5;
  font-size: ${FONT.sm};
  color: ${COLOR.text_2};
`;

const RulesPage = () => {
  const rule1 = useRef();
  const rule2 = useRef();
  const rule3 = useRef();
  const currentRule = useSelector(selectCurrentRule);
  useEffect(() => {
    if (currentRule === 'rule1') rule1.current.click();
    if (currentRule === 'rule2') rule2.current.click();
    if (currentRule === 'rule3') rule3.current.click();
  }, [currentRule]);
  return (
    <ThickNavPage>
      <Navigation>
        <NavigationTitle>我們的條款</NavigationTitle>
        <RuleLink ref={rule1} href="#rule1">
          免責聲明
        </RuleLink>
        <RuleLink ref={rule2} href="#rule2">
          退貨政策
        </RuleLink>
        <RuleLink ref={rule3} href="#rule3">
          隱私權條款
        </RuleLink>
      </Navigation>
      <Container>
        <Rule name="rule1" id="rule1">
          <RuleTitle>免責聲明</RuleTitle>
          <RuleContent>
            當您使用本站，代表您了解並遵守以下規章：
            <br />
            <br />
            根據 FTC
            規定，請假設本站中所推薦的商家、產品均有合作關係，當使用者於站內連結到第三方商家網站並進行消費
            ，本站將獲得部分消費金額作為傭金回報並維持本站營運的開銷，但這不影響您所購買任何商品的價格，本站也不會
            多收您任何一分一毛。
            <br />
            <br />
            本站將不負責任何用戶與商家之間的交易。任何取消、更改訂單請直接與商家客服聯絡。本站將不參與及協助任何消
            費者與商家之間的糾紛。
            <br />
            <br />
            所有來信諮詢的信件我們不會將資料轉發給其他方或商家，信箱及個人資訊僅供本站與用戶聯繫。
          </RuleContent>
        </Rule>
        <Rule name="rule2" id="rule2">
          <RuleTitle>退貨政策</RuleTitle>
          <RuleContent>
            台灣境內交易七天鑑賞期
            <br />
            <br />
            台灣境內交易，根據台灣消保法第十九條規範，享有收到商品後隔日起算七天內無條件退換貨的服務，且商品退回運費由賣方承擔。
            請保持商品包裝完整寄回，經賣方確認無誤後，即可申請退款。
          </RuleContent>
        </Rule>
        <Rule name="rule3" id="rule3">
          <RuleTitle>隱私權條款</RuleTitle>
          <RuleContent>
            非常歡迎您光臨「Give++
            二手交易平台」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
            <br />
            <br />
            一、隱私權保護政策的適用範圍
            <br />
            <br />
            隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
            <br />
            <br />
            二、個人資料的蒐集、處理及利用方式
            <br />
            <br />
            當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。
            <br />
            <br />
            三、資料之保護
            <br />
            <br />
            本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。
            <br />
            如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。
            <br />
            <br />
            四、網站對外的相關連結
            <br />
            <br />
            本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。
            <br />
            <br />
            五、與第三人共用個人資料之政策
            <br />
            <br />
            本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關。
            <br />
            <br />
            六、隱私權保護政策之修正
            <br />
            <br />
            本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。
          </RuleContent>
        </Rule>
      </Container>
    </ThickNavPage>
  );
};

export default RulesPage;
