import type { RemittanceType } from '../../types/remittance';

export const SendDatas = [
  {
    image: {
      src: `${process.env.PUBLIC_URL}/toss/remittance_free.png`,
      alt: '평생 무료 송금 이미지',
    },
    content: {
      badgeContent: '평생 무료 송금',
      title: (
        <>
          토스 평생 무료송금으로
          <br />
          모두의 금융에 자유를
        </>
      ),
      description: (
        <>
          누구에게 보내든 은행 상관 없이,
          <br /> 이제 토스와 함께 수수료 걱정 없이 송금하세요.
        </>
      ),
    },
  },
  {
    image: {
      src: `${process.env.PUBLIC_URL}/toss/remittance_declaration.png`,
      alt: '사기계좌 조회 이미지',
    },
    content: {
      badgeContent: '사기계좌 조회',
      title: (
        <>
          송금 전 사기 내역 조회로
          <br />
          피해를 미리 방지할 수 있어요
        </>
      ),
      description: (
        <>
          송금 전 토스가 알아서 사기 내역 조회를 해드려요.
          <br />
          상대방의 연락처 또는 계좌가 사기 계좌인지 조회해
          <br />
          안전하게 송금할 수 있어요.
        </>
      ),
    },
  },
  {
    image: {
      src: `${process.env.PUBLIC_URL}/toss/remittance_automatic_debit.png`,
      alt: '자동이체 예약 이미지',
    },
    content: {
      badgeContent: '자동이체 예약',
      title: (
        <>
          은행 점검 시간,
          <br />
          기다릴 필요 없어요
        </>
      ),
      description: (
        <>
          은행 점검 시간에는 자동이체 예약을 이용해보세요.
          <br /> 점검 시간이 끝나면 토스가 알아서 송금해드릴게요.
        </>
      ),
    },
  },
] as Array<RemittanceType>;
