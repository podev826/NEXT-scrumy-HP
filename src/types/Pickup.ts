import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListResponse,
} from 'microcms-js-sdk';

export type PickupItemProps = {
  title: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  href: string;
};

export type PickupContentProps = PickupItemProps &
  MicroCMSContentId &
  MicroCMSDate;

export type PickupDataProps = MicroCMSListResponse<PickupItemProps>;
