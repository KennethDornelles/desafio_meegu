import { Column, Text, Row, Input, Button, List } from 'components';

export const Home = () => {
  return (
    <Column width="600px" margin="0 auto">
      <Text fontWeight="bold" fontSize="bodyLarge" my="10px" paddingLeft="10px">Tasks</Text>
      <Row width="100%">
        <Input placeholder="Enter a task name here" />
        <Button>OK</Button>
        <List items={[
          { label: 'Task 1' },
          { label: 'Task 2' },
          { label: 'Task 3' }
        ]}/>
      </Row>
    </Column>
  );
};
