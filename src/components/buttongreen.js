import React from "react"
import styles from "./buttongreen.module.css"
import { css } from "@emotion/react"

export default function ButtonGreen() {
  return (
    <div className="de elBTN elAlign_center elMargin0 ui-droppable de-editable" id="tmp_button-51801-122" data-de-type="button" data-de-editing="false" data-title="button" 
    data-ce="false" data-trigger="none" data-animate="fade" data-delay="500" data-element-theme="customized" aria-disabled="false" data-elbuttontype="1" data-hide-on="desktop" 
    css={css`margin-top: 20px; outline: none; cursor: pointer;`}>
        <a href="#open-popup" className="elButton elButtonSize1 elButtonColor1 elButtonRounded elButtonPadding2 elButtonCorner3 elBtnHP_25 elBTN_b_1_3 elButtonShadowN3 elButtonTxtColor2 
        elBTNone elButtonBlock elButtonFull elBtnVP_20 ea-buttonElevate" rel="noopener noreferrer" 
        css={css`color: rgb(255, 255, 255); background: rgb(48, 160, 92); font-size: 26px;`}>
            <span className="elButtonMain"> &#12302;&#20813;&#36027;One-on-one&#23560;&#26989;&#38651;&#35441;&#35566;&#35426;&#26381;&#21209;&#12303; </span>
            <span className="elButtonSub" css={css`font-size: 24px;`}>&#31435;&#21363;&#38283;&#22987;&#20493;&#22686;&#20320;&#30340;&#25910;&#20837;</span>
        </a>
    </div>
  )
}