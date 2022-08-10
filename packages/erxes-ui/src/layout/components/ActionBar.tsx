import React from 'react';
import { ContentHeader, HeaderContent, HeaderItems } from '../styles';

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
  background?: string;
  zIndex?: number;
  hasFlex?: boolean;
  noBorder?: boolean;
};

function ActionBar({
  left,
  right,
  background,
  bottom,
  zIndex,
  hasFlex,
  noBorder
}: Props) {
  return (
    <ContentHeader
      background={background || 'colorWhite'}
      noBorder={noBorder}
      zIndex={zIndex}
    >
      <HeaderContent>
        {left && <HeaderItems hasFlex={hasFlex}>{left}</HeaderItems>}
        {right && <HeaderItems rightAligned={true}>{right}</HeaderItems>}
      </HeaderContent>
      {bottom}
    </ContentHeader>
  );
}

export default ActionBar;