import { Column, Text } from 'components';

export type ListItemProps = {
  id: string,
  task: string,
  isDone: number
}

export const ListItem: React.FC<ListItemProps> = ({ id, task, isDone }) => {
  return (
    <Column
      width='100%'
      bg='rgba(0, 0, 0, 0.2)'
      p='20px'
      mb='10px'
      borderRadius='4px'
      borderLeft='5px solid #fff'>
      <Text>{task}</Text>
    </Column>
  )
} 