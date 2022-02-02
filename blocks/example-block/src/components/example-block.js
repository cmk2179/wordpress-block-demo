import classNames from "classnames";

export const ExampleBlock = ({
  title,
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      style={{ backgroundColor: backgroundColor }}
      className={classNames("demo-example-block", props.className)}
    >
      <h1>{title}</h1>
      {children}
    </div>
  );
};
