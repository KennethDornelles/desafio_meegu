import { useState } from 'react';
import { Column, Text, Row, Input, Button, List, Logo } from 'components';

export const Home = () => {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<{ label: string }[]>([]);

  const handleOKButton = () => {
    if(!taskName) return;

    setTasks((previous) => {
      const copy = [...previous];
      copy.push({ label: taskName });
      return copy;
    });
    setTaskName('');
  };

  return (
    <Column width="600px" margin="0 auto">
      <Column width='100%' py='25px' alignItems='center' >
        <Logo />
      </Column>

      <Text fontWeight="bold" fontSize="bodyLarge" my="10px" paddingLeft="10px">
        Tasks
      </Text>
      <Row width="100%">
        <Input placeholder="Enter a task name here" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <Button onClick={handleOKButton}>OK</Button>
        <List items={tasks} />
      </Row>
    </Column>
  );
};
