import React, { useState } from 'react';

interface Param {
  id: number;
  name: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

const params: Param[] = [
  {
    id: 1, name: "Назначение"
  },
  {
    id: 2, name: "Длина"
  },
  {
    id: 3, name: "Размер"
  }
];

const model: Model = {
  paramValues: [
    {
      paramId: 1, value: ""
    },
    {
      paramId: 2, value: ""
    },
    {
      paramId: 3, value: ""
    }
  ]
};

const App: React.FC = () => {
  const [paramValues, setParamValues] = useState<ParamValue[]>(model.paramValues);

  const handleParamChange = (paramId: number, value: string) => {
    const updatedParamValues = paramValues.map(param => {
      if (param.paramId === paramId) {
        return { paramId, value };
      }
      return param;
    });
    setParamValues(updatedParamValues);
  };

  const getModel = () => {
    return { paramValues };
  };

  return (
    <div className='App'>
      <div>
        {params.map(param => (
          <div key={param.id}>
            <label>{param.name}:</label>
            <input
              type="text"
              value={paramValues.find(p => p.paramId === param.id)?.value || ''}
              onChange={(e) => handleParamChange(param.id, e.target.value)}
            />
          </div>
        ))}
        <button onClick={() => console.log(getModel())}>Get Model</button>
      </div>
    </div>
  );
};

export default App;
