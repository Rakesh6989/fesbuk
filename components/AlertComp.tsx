import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
interface AlertProps {
  type: string;
  name: string;
  className: string;
}
const BirthdayAlert = ({ name, className, type }: AlertProps) => {
  return (
    <div className="mx-auto mt-10">
      <p className="font-semibold pb-2">{type}</p>
      <div className={`${className}`}>
        <CardGiftcardIcon sx={{ fontSize: "40px", color: "blueviolet" }} />
        <p className="font-semibold">
          <span className="font-bold">{name}</span> has a birthday today.
        </p>
      </div>
    </div>
  );
};
function AlertComp() {
  return (
    <BirthdayAlert
      name="Rakesh"
      className="w-full flex justify-start gap-3 items-center"
      type="Birthdays"
    />
  );
}

export default AlertComp;
