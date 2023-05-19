import { useState, useMemo } from 'react';
import { Column, Text, Row, Input, Button, List, Logo, Icon } from 'components';

const SECONDS_DEFAULT = 5;

export const Home = () => {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<{ label: string }[]>([]);
  const [seconds, setSeconds] = useState(SECONDS_DEFAULT);
  const [timer, setTimer] = useState<any>();
  const [stage, setStage] = useState('ready');

  const handleOKButton = () => {
    if (!taskName) return;

    setTasks((previous) => {
      const copy = [...previous];
      copy.push({ label: taskName });
      return copy;
    });
    setTaskName('');
  };

  const secondsToTime = (secs: number) => {
    const divisorMinute = secs % 3600;

    const minutes = Math.floor(divisorMinute / 60);
    const seconds = Math.ceil(divisorMinute % 60);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const startTimer = () => {
    setStage('in_progress');
    const timerInterval = setInterval(() => {
      setSeconds((previousSeconds) => {
        if (previousSeconds === 0) {
          clearInterval(timerInterval);
          setTimer(undefined);
          setStage('finished');
          return 0;
        }

        return previousSeconds - 1;
      });
    }, 1000);

    setTimer(timerInterval);
  };

  const handlePauseButton = () => {
    clearInterval(timer);
    setTimer(undefined);
  };

  const handleStopButton = () => {
    handlePauseButton();
    setSeconds(SECONDS_DEFAULT);
    setStage('ready');
  };

  const handleStageStatus = useMemo(() => {
    switch(stage){
      case 'ready':
        return 'Ready'
      
      case 'in_progress':
        return 'Time to work!'
      
      case 'finished':
        return 'Finished'

      default:
        return 'Ready';
    }
  }, [stage])

  return (
    <Column width="600px" margin="0 auto">
      <Column width="100%" py="25px" alignItems="center">
        <Logo />
      </Column>

      <Column
        width="100%"
        minHeight="300px"
        p="20px"
        bg="rgba(255, 255, 255, 0.2)"
        borderRadius="4px"
        alignItems="center"
      >
        <Text fontFamily="secondary" fontSizes="bodyExtraLarge">
          {handleStageStatus}
        </Text>

        <Text fontFamily="secondary" fontWeight="bold" fontSizes="displayExtraLarge" py="30px">
          {secondsToTime(seconds)}
        </Text>

        <Button variant="primary" onClick={startTimer}>
          <Text fontFamily="secondary" fontSizes="bodyExtraLarge" fontWeight="bold" color="primary">
            START
          </Text>
        </Button>

        <Row py="20px">
          <Button variant="primary" p="10px 20px" mx="5px" onClick={startTimer}>
            <Icon variant="play" />
          </Button>
          <Button variant="primary" p="10px 20px" mx="5px" onClick={handlePauseButton}>
            <Icon variant="pause" />
          </Button>
          <Button variant="primary" p="10px 20px" mx="5px" onClick={handleStopButton}>
            <Icon variant="stop" />
          </Button>
          <Button variant="primary" p="10px 20px" mx="5px" onClick={startTimer}>
            <Icon variant="restart" />
          </Button>
          <Button variant="primary" p="10px 20px" mx="5px">
            <Icon variant="done" />
          </Button>
        </Row>
      </Column>

      <Text fontWeight="bold" fontSizes="bodyLarge" my="10px" paddingLeft="10px">
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
