import React from 'react';

const PollSettings = () => {
  return (
    <div>
      Manage questions 
      <ul>
        <li>questions</li>
        <li>type
          <ul>
            <li>Multiple correct answers</li>
            <li>Single correct answer</li>
            <li>Subjective</li>
            <li>Yes no</li>
          </ul>
        </li>
        <li>tag/identifier which the bot can read and understand</li>
      </ul>
    </div>
  );
};

export default PollSettings;