import * as S from './styles';
import SendIcon from '@mui/icons-material/Send';

export function BtnOutlined() {
  return (
    <>
      <S.OutlinedBtn
        variant='outlined'
        size='medium'
        disableRipple
        disableElevation
        endIcon={<SendIcon />}
      >
        Send
      </S.OutlinedBtn>
    </>
  );
}