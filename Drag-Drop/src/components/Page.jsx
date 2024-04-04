import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import LabelModal from './LabelModal';
import InputModal from './InputModal';
import ButtonModal from './ButtonModal';

const Page = () => {
  const [components, setComponents] = useState([]);
  const [modalData, setModalData] = useState({});
  const [dragOffset, setDragOffset] = useState({ offsetX: 0, offsetY: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const savedComponents = JSON.parse(localStorage.getItem('pageComponents')) || [];
    setComponents(savedComponents);
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e) => {
    const offsetX = 0;
    const offsetY = 0;
    setDragOffset({ offsetX, offsetY });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('text/plain');
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    openModal(type, { x, y });

    setDragOffset({ offsetX: 0, offsetY: 0 });
  };

  const handleDelete = (id) => {
    const updatedComponents = components.filter((component) => component.id !== id);
    setComponents(updatedComponents);
    localStorage.setItem('pageComponents', JSON.stringify(updatedComponents));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
    setModalData({}); 
  };

  const handleLabelSubmit = (labelData) => {
    setComponents([...components, { ...labelData, id: new Date().getTime(), draggable: true }]);
    localStorage.setItem('pageComponents', JSON.stringify([...components, { ...labelData, id: new Date().getTime(), draggable: true }]));
    handleCloseModal();
  };

  const handleInputSubmit = (inputData) => {
    setComponents([...components, { ...inputData, id: new Date().getTime(), draggable: true }]);
    localStorage.setItem('pageComponents', JSON.stringify([...components, { ...inputData, id: new Date().getTime(), draggable: true }]));
    handleCloseModal();
  };

  const handleButtonSubmit = (buttonData) => {
    setComponents([...components, { ...buttonData, id: new Date().getTime(), draggable: true }]);
    localStorage.setItem('pageComponents', JSON.stringify([...components, { ...buttonData, id: new Date().getTime(), draggable: true }]));
    handleCloseModal();
  };

  const openModal = (type, initialData) => {
    setModalData({ type, initialData });
    setIsModalOpen(true); 
  };

  const handleClick = (id) => {
    const updatedComponents = components.map((component) => {
      if (component.id === id) {
        return {
          ...component,
          selected: !component.selected, 
        };
      }
      return component;
    });
    setComponents(updatedComponents);
  };

  const handleDragEnd = (e, id) => {
    const updatedComponents = components.map((component) => {
      if (component.id === id) {
        return {
          ...component,
          x: e.clientX - 230,
          y: e.clientY - 30,
        };
      }
      return component;
    });

    setComponents(updatedComponents);
    localStorage.setItem('pageComponents', JSON.stringify(updatedComponents));
  };

  const handleKeyDown = (e, data) => {
    if (e.key === 'Delete') {
      handleDelete(data.id);
    } else if (e.key === 'Enter') {
      if (data.type) {
        const selectedComponent = components.find(component => component.id === data.id);
        if (selectedComponent) {
          const modalType = selectedComponent.type === 'Label'
            ? 'Label'
            : selectedComponent.type === 'Input'
              ? 'Input'
              : selectedComponent.type === 'Button'
                ? 'Button'
                : null;
          if (modalType) {
            setModalData({ type: modalType, initialData: selectedComponent });
            setIsModalOpen(true); 
          }
        }
      }
    }
  };

  return (
    <Box flex="1" p={4} onDragOver={handleDragOver} onDrop={handleDrop} bg="white">
      <Box h="100%" border="2px dashed gray" position="relative">
        {components.map((component) => {
          let style = {};
          if (component.type === 'Label' || component.type === 'Input' || component.type === 'Button') {
            style = {
              position: 'absolute',
              left: `${component.x}px`,
              top: `${component.y}px`,
              fontSize: `${component.fontSize}px`,
              fontWeight: component.fontWeight,
              cursor: component.draggable ? 'move' : 'pointer',
              border: component.selected ? '2px solid red' : '2px solid transparent', 
            };
          }
          return (
            <Box
              key={component.id}
              p={2}
              m={2}
              bg="gray.200"
              cursor="pointer"
              style={style}
              draggable={component.draggable}
              onDragStart={(e) => handleDragStart(e, component.id)}
              onDragEnd={(e) => handleDragEnd(e, component.id)}
              onKeyDown={(e) => handleKeyDown(e, component)} 
              onClick={() => handleClick(component.id)}
              tabIndex={0} 
            >
              {component.type === 'Label' && <label>{component.text}</label>}
              {component.type === 'Input' && <input placeholder={component.inputType} type={component.inputType} />}
              {component.type === 'Button' && <button >{component.buttonName}</button>}
            </Box>
          );
        })}
      </Box>
      <LabelModal isOpen={isModalOpen && modalData.type === 'Label'} onClose={handleCloseModal} onSubmit={handleLabelSubmit} initialData={modalData.initialData} />
      <InputModal isOpen={isModalOpen && modalData.type === 'Input'} onClose={handleCloseModal} onSubmit={handleInputSubmit} initialData={modalData.initialData} />
      <ButtonModal isOpen={isModalOpen && modalData.type === 'Button'} onClose={handleCloseModal} onSubmit={handleButtonSubmit} initialData={modalData.initialData} />
    </Box>
  );
};

export default Page;
