import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person; //people.id,people.name ennokke vilikkunahinu pakaram just id,name enn vilikan
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} Years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
