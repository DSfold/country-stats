import { useMemo, useState } from "react";
import { PaginationButton } from "./PaginationButton";
import { PaginationDropDown } from "./PaginationDropDown";

export interface PaginationProps {
  take: number;
  skip: number;
  totalAmount: number;
  totalPages?: number;
  currentPage: number;
  handleSetSkip: (value: number) => void;
  handleSetTake: (value: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const [currentButtons, setCurrentButtons] = useState<number[]>();

  useMemo(() => {
    const btnArr = Array(props.totalPages)
      .fill(0)
      .map((el, i) => (el = i + 1))
      .slice(1, props.totalPages && props.totalPages - 1)
      .filter(
        (el) => el >= props.currentPage - 1 && el <= props.currentPage + 1
      );
    setCurrentButtons(btnArr);
  }, [props.currentPage, props.skip, props.totalPages]);

  return (
    <div className="flex justify-end">
      <PaginationDropDown handleSetTake={props.handleSetTake} />
      <nav aria-label="Page navigation">
        <ul className="inline-flex -space-x-px text-base h-10">
          <PaginationButton
            isDisabled={props.skip === 0}
            lable="Prev"
            isStart
            onClick={() => {
              props.handleSetSkip(props.skip - props.take);
            }}
          />
          <PaginationButton
            lable="1"
            isCurrent={props.currentPage === 1}
            onClick={() => {
              props.handleSetSkip(0);
            }}
          />
          {props.currentPage > 3 && (
            <div className="w-7 text-center align-bottom mt-4 tracking-widest">
              ...
            </div>
          )}

          {currentButtons &&
            currentButtons.map((el) => (
              <PaginationButton
                key={el}
                isCurrent={props.currentPage === el}
                lable={`${el}`}
                onClick={() => {
                  props.handleSetSkip((el - 1) * props.take);
                }}
              />
            ))}

          {props.currentPage < 20 && (
            <div className="w-7 text-center align-bottom mt-4 tracking-widest">
              ...
            </div>
          )}
          {props.totalPages && props.totalPages > 1 && (
            <PaginationButton
              isCurrent={props.currentPage === props.totalPages}
              lable={`${props.totalPages}`}
              onClick={() => {
                props.handleSetSkip(props.totalAmount - props.take);
              }}
            />
          )}
          <PaginationButton
            isDisabled={props.skip >= props.totalAmount - props.take}
            onClick={() => {
              props.handleSetSkip(props.skip + props.take);
            }}
            lable="Next"
            isEnd
          />
        </ul>
      </nav>
    </div>
  );
};
