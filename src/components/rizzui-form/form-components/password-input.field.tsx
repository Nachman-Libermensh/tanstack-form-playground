import { useFieldContext } from "..";
import { Password } from "rizzui";
import FieldErrors from "./field-errors";

export function PasswordInput({
  label,
  placeholder,
  dir = "rtl",
  showStrengthIndicator = false,
}: {
  label: string;
  placeholder?: string;
  dir?: "ltr" | "rtl";
  showStrengthIndicator?: boolean;
}) {
  const field = useFieldContext<string>();
  return (
    <div>
      <div>
        <Password
          label={label}
          name={field.name}
          id={field.name}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          placeholder={placeholder}
          dir={dir}
        />
      </div>
      {showStrengthIndicator && (
        <PasswordStrengthIndicator password={field.state.value} />
      )}
      <FieldErrors meta={field.state.meta} />
    </div>
  );
}
function PasswordStrengthIndicator({ password }: { password: string }) {
  const getStrength = (pass: string) => {
    if (!pass) return 0;
    let strength = 0;

    // Length check
    if (pass.length >= 8) strength += 1;

    // Uppercase check
    if (/[A-Z]/.test(pass)) strength += 1;

    // Lowercase check
    if (/[a-z]/.test(pass)) strength += 1;

    // Number check
    if (/[0-9]/.test(pass)) strength += 1;

    // Special character check
    if (/[^A-Za-z0-9]/.test(pass)) strength += 1;

    return strength;
  };

  const strength = getStrength(password);
  const percentage = (strength / 5) * 100;

  const getColor = () => {
    if (strength < 2) return "bg-red-500";
    if (strength < 4) return "bg-amber-500";
    return "bg-green-500";
  };

  const getLabel = () => {
    if (strength < 2) return "חלשה";
    if (strength < 4) return "בינונית";
    return "חזקה";
  };

  if (!password) return null;

  return (
    <div className="mt-2 mb-3">
      <div className="flex justify-between items-center mb-1">
        <p className="text-xs text-gray-500">עוצמת סיסמה</p>
        <p
          className={`text-xs font-medium ${
            strength < 2
              ? "text-red-500"
              : strength < 4
                ? "text-amber-500"
                : "text-green-500"
          }`}
        >
          {getLabel()}
        </p>
      </div>
      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
