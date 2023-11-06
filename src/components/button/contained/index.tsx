import * as S from './styles';
import SendIcon from '@mui/icons-material/Send';

export function BtnContained() {
  return (
    <>
      <S.ContainedBtn
        variant='contained'
        size='medium'
        disableRipple
        disableElevation
        endIcon={<SendIcon />}
      >
        Send
      </S.ContainedBtn>
    </>
  );
}