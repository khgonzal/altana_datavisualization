import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const SearchCard = (props) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <Button
        type="link"
        key={props.item.altana_canon_id}
        onClick={showModal}
      >
        {props.item.company_name}
      </Button>
      <Modal
        title={props.item.company_name}
        visible={visible}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        hi
      </Modal>
    </>
  );
};

export default SearchCard;
