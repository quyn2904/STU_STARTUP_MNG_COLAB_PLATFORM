import { useDroppable } from '@dnd-kit/core';
import { ReactElement } from 'react';

const DroppableField = ({
  id,
  ...props
}: {
  id: string;
  children: ReactElement[] | ReactElement;
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <div ref={setNodeRef} className="min-h-[70vh]" style={style}>
      {props.children}
    </div>
  );
};

export default DroppableField;
