//Styled
import {
  H2
} from './styles'

type SubTitleProps = {
  title: string
}

const SubTitle = ({title}: SubTitleProps) => {
  return (
    <H2>
      {title}
    </H2>
  )
}

export default SubTitle;