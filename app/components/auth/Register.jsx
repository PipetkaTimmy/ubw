import { useState } from "react";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Select, SelectItem } from "@nextui-org/select";
import { regions } from "@/app/data/data";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    birthDate: null,
    identityDocumentType: "",
    issuanceDate: null,
    documentNumber: "",
    issuingAuthority: "",
    registrationAddress: "",
    citizenship: "",
    maritalStatus: "",
    income: "",
    initialContributionSource: "",
    desiredRegion: "",
    realEstateType: "",
    minimumArea: "",
    purchaseType: "",
    estimatedCost: "",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    for (const key in formData) {
      if (formData[key] === "" || formData[key] === null) {
        alert(`Пожалуйста, заполните все поля`);
        return;
      }
    }
    console.log(formData);
  };


  return (
    <Card
      className="border-none"
    >
      <div className="p-4">
        <span>Авторизация</span>
        <div className="wraperLoginInput">
          <Input
            label="ФИО"
            variant="bordered"
            placeholder="Введите ваше ФИО"
            className="input"
            onChange={(e) => handleChange("fullName", e.target.value)}
          />

          <Input
            label="Электронная почта"
            variant="bordered"
            placeholder="Введите вашу электронную почту"
            className="input"
            type="email"
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <DatePicker
            label="Дата рождения"
            variant="bordered"
            onChange={(date) => handleChange("birthDate", date)}
          />

          <RadioGroup
            label="Вид документа удостоверяющие личность"
            onChange={(value) => handleChange("identityDocumentType", value)}
          >
            <Radio value="0">Удостоверение личности</Radio>
            <Radio value="1">Паспорт</Radio>
          </RadioGroup>

          <DatePicker
            label="Дата выдачи"
            variant="bordered"
            onChange={(date) => handleChange("issuanceDate", date)}
          />

          <Input
            label="Номер документа"
            variant="bordered"
            placeholder="Номер документа"
            className="input"
            type="number"
            onChange={(e) => handleChange("documentNumber", e.target.value)}
          />

          <Input
            label="Орган выдавший документ"
            variant="bordered"
            placeholder="Орган выдавший документ"
            className="input"
            onChange={(e) => handleChange("issuingAuthority", e.target.value)}
          />

          <Input
            label="Адрес регистрации"
            variant="bordered"
            placeholder="Адрес регистрации"
            className="input"
            onChange={(e) => handleChange("registrationAddress", e.target.value)}
          />

          <Input
            label="Гражданство"
            variant="bordered"
            placeholder="Гражданство"
            className="input"
            onChange={(e) => handleChange("citizenship", e.target.value)}
          />

          <RadioGroup
            label="Семейное положение"
            onChange={(value) => handleChange("maritalStatus", value)}
          >
            <Radio value="0">В браке</Radio>
            <Radio value="1">Холост</Radio>
          </RadioGroup>

          <Input
            label="Ср.доход за последние 6 месяцев"
            variant="bordered"
            placeholder="Ср.доход за последние 6 месяцев"
            className="input"
            type="number"
            onChange={(e) => handleChange("income", e.target.value)}
          />

          <Input
            label="Источник первоначальных взносов"
            variant="bordered"
            placeholder="Источник первоначальных взносов"
            className="input"
            type="number"
            onChange={(e) => handleChange("initialContributionSource", e.target.value)}
          />

          <Select
            label="Желаемый регион приобретения объекта"
            className="max-w-md"
            variant="bordered"
            onChange={(value) => handleChange("desiredRegion", value)}
          >
            {regions.map((region) => (
              <SelectItem key={region.value} value={region.value}>
                {region.label}
              </SelectItem>
            ))}
          </Select>

          <Input
            label="Вид объекта недвижимости"
            variant="bordered"
            placeholder="Вид объекта недвижимости"
            className="input"
            onChange={(e) => handleChange("realEstateType", e.target.value)}
          />

          <Input
            label="Общая площадь не менее (м.кв)"
            variant="bordered"
            placeholder="Общая площадь не менее (м.кв)"
            className="input"
            type="number"
            onChange={(e) => handleChange("minimumArea", e.target.value)}
          />

          <RadioGroup
            label="Тип покупки"
            onChange={(value) => handleChange("purchaseType", value)}
          >
            <Radio value="0">Первичное жилье</Radio>
            <Radio value="1">Вторичное жилье</Radio>
          </RadioGroup>

          <Input
            label="Ориентировочная стоимость"
            variant="bordered"
            placeholder="Ориентировочная стоимость"
            className="input"
            type="number"
            onChange={(e) => handleChange("estimatedCost", e.target.value)}
          />
        </div>
        <Button className="authButton" color="primary" onClick={handleSubmit}>Регистрация</Button>
      </div>
    </Card>
  )
}

export default Register