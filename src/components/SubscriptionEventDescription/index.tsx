import { ReactNode } from 'react';

import {
  CalendarIcon,
  Detail,
  Details,
  DetailText,
  OnlineIcon,
  SubTitle,
  Title,
} from './styles';

type SubscriptionEventDescriptionProps = {
  title: ReactNode;
  subtitle: ReactNode;
};

export function SubscriptionEventDescription({
  title,
  subtitle,
}: SubscriptionEventDescriptionProps) {
  return (
    <>
      <Title>{title}</Title>

      <SubTitle>{subtitle}</SubTitle>

      <Details>
        <Detail>
          <CalendarIcon />

          <DetailText>
            18 a 24 <br />
            de outubro
          </DetailText>
        </Detail>

        <Detail>
          <OnlineIcon />

          <DetailText>
            Online <br /> e gratuito
          </DetailText>
        </Detail>
      </Details>
    </>
  );
}
