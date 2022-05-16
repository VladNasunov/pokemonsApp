import { Modal } from "antd";
import React, { FC } from "react";
import { ChartTableColumns } from "../Table/constants/TableConstants";
import TableWithSorting from "../Table/TableWithSorting";
import { DataType, onClickType } from "./types/types";

type ChartModalProps = {
  data: DataType[];
  isModalVisible: boolean;
  setIsModalVisible: onClickType;
};

const ChartModal: FC<ChartModalProps> = ({
  data,
  isModalVisible,
  setIsModalVisible,
}) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleCancel}
        footer={null}
      >
        <TableWithSorting<DataType> columns={ChartTableColumns} data={data} />
      </Modal>
    </div>
  );
};

export default ChartModal;
