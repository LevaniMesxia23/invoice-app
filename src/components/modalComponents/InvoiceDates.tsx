import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";
import { ChangeEvent } from "react";

const InvoiceDates = () => {
  const { control, setValue, trigger } = useFormContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue(name, value);
    trigger(name);
  };
  return (
    <div className="pt-[26px]">
      <InputField
        id="paymentDue"
        type="date"
        name="paymentDue"
        onChangeFunc={handleChange}
      >
        Invoice Date
      </InputField>
      <Controller
        name="paymentTerms"
        control={control}
        render={({ field }) => (
          <div>
            <label className="labelStyle mt-4" htmlFor="paymentTerms ">
              Payment Terms
            </label>
            <select
              className="inputStyle p-0 h-12 inputText styled-select "
              id="paymentTerms inputStyle"
              {...field}
            >
              <option className=" h-[40px] hover:font-bold " value="1">
                Net 1 Day
              </option>
              <option value="7">Net 7 Days</option>
              <option value="14">Net 14 Days</option>
              <option value="30">Net 30 Days</option>
            </select>
          </div>
        )}
      />
      <InputField
        id="InvoiceDatesProjectDesc"
        type="text"
        name="description"
        onChangeFunc={handleChange}
      >
        Project Description
      </InputField>
    </div>
  );
};

export default InvoiceDates;