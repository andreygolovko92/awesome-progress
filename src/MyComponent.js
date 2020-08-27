import React from 'react';
import atomize from "@quarkly/atomize";
import { Box } from '@quarkly/widgets';
import ProgressLabel from 'react-progress-label';

const Progress = props => {
  return (
    <Box
      {...props}
      
      padding="40px"
      width="200px"
      height="200px"
      background="#000000"
      position="relative"
    >
      <Box
        top={`calc(50% - ${ 100 }px)`}
        left={`calc(50% - ${ 100 }px)`}
        width={`${ 200 }px`}
        height={`${ 200 }px`}
        position="absolute"
      >
        <ProgressLabel
          progress={40}
          startDegree={0}
          progressWidth={20}
          trackWidth={18}
          trackBorderWidth={1}
          trackBorderColor="#440000"
          cornersWidth={10}
          size={200}
          fillColor="#000000"
          trackColor="#440000"
          progressColor="#FF0000"
        />
      </Box>
      
      <Box
        top={`calc(50% - ${ 75 }px)`}
        left={`calc(50% - ${ 75 }px)`}
        width={`${ 150 }px`}
        height={`${ 150 }px`}
        position="absolute"
      >
        <ProgressLabel
          progress={50}
          startDegree={0}
          progressWidth={20}
          trackWidth={18}
          trackBorderWidth={1}
          trackBorderColor="#004400"
          cornersWidth={10}
          size={150}
          fillColor="#000000"
          trackColor="#004400"
          progressColor="#00FF00"
        />
      </Box>
      
      <Box
        top={`calc(50% - ${ 50 }px)`}
        left={`calc(50% - ${ 50 }px)`}
        width={`${ 100 }px`}
        height={`${ 100 }px`}
        position="absolute"
      >
        <ProgressLabel
          progress={80}
          startDegree={0}
          progressWidth={20}
          trackWidth={18}
          trackBorderWidth={1}
          trackBorderColor="#000044"
          cornersWidth={10}
          size={100}
          fillColor="#000000"
          trackColor="#000044"
          progressColor="#0000FF"
        />
      </Box>
      
    </Box>
  )
}

export default atomize(Progress)({
  name: "Progress",
  effects: {
    hover: ":hover"
  },
  normalize: true,
  mixins: true,
  description: {
    // past here description for your component
    en:
      "Progress — my awesome component",
  },
  propInfo: {
    
  }
});
