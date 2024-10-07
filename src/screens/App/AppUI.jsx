import { useContext } from "react";

import { TodoContext } from "../../context";

import { Item } from "../../components/Item";
import { List } from "../../components/List";
import { Form } from "../../components/Form";
import { Modal } from "../../components/Modal";
import { Title } from "../../components/Title";
import { Timer } from "../../components/Timer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Counter } from "../../components/counter";
import { Loading } from "../../components/Loading";

const AppUI = () => {
  const { loading, error, onDelete, onComplete, toShowToDos, openModal } =
    useContext(TodoContext);
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex justify-center items-start ">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-2xl p-8">
        <Title />
        <Timer />
        <Counter />
        <Input />
        <List>
          {loading && (
            <>
              <Loading /> <Loading />
            </>
          )}
          {error && <p className="text-sm text-gray-900 text-white">Error</p>}
          {!loading && toShowToDos.length === 0 && (
            <p className="text-base text-gray-900 text-white">
              No tienes tareas, añade una nueva
            </p>
          )}
          {toShowToDos.map((item, index) => (
            <Item
              key={index}
              {...item}
              onDelete={onDelete}
              onComplete={() => {
                onComplete(index);
              }}
            />
          ))}
        </List>
        <Button />
        {openModal && (
          <Modal>
            <Form />
          </Modal>
        )}
      </div>
    </div>
  );
};

export { AppUI };
