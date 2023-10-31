import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const CustomBadge = styled.div`
  display: inline-flex;
  align-items: center;
  height: 28px;
  justify-content: center;
  color: #4d5761;
  border: 1px solid #6c737f;
  border-radius: 16px;
  padding: 4px 10px 4px 10px;
`;

const SelectBoxContainer = styled.div`
  width: 100%;
  position: relative;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #1a2122;
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  min-height: 48px;
  padding: 8px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #384250;
  background-color: white;
  cursor: pointer;
  box-sizing: border-box;
`;

const DropdownContainer = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: 106%;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const Tab = styled.div`
  cursor: pointer;
  padding: 3px 15px;
  border-radius: 8px;
  color: ${(props) => (props.isActive ? "#1A2122" : "#9DA4AE")};
  &:hover {
    color: #1a2122;
  }
`;

const Option = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.selected ? "#F9FAFB" : "transparent")};
  &:hover {
    background-color: #f9fafb;
  }
`;

const RemoveButton = styled.span`
  margin-left: 5px;
  cursor: pointer;
`;

const OptionContainer = styled.div`
  color: #4d5761;
  border: 1px solid #e5e7eb;
  padding: 5px 10px;
  border-radius: 8px;
  max-height: 130px;
  overflow-y: auto;
`;

const TickIcon = styled(FaCheck)`
  color: #564ccc;
`;

const SelectBox = ({ categories }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState("");
  const handleOptionClick = (option) => {
    setSelectedOptions((prev) => {
      const optionsArray = prev.split(", ");
      if (optionsArray.includes(option)) {
        // If already selected, remove the option
        return optionsArray.filter((opt) => opt !== option).join(", ");
      } else {
        // Otherwise, add the option
        return prev ? `${prev}, ${option}` : option;
      }
    });
  };

  const handleRemoveOption = (optionToRemove) => {
    setSelectedOptions((prev) => {
      const optionsArray = prev
        .split(", ")
        .filter((option) => option !== optionToRemove);
      return optionsArray.join(", ");
    });
  };

  const getOptionsForActiveTab = () => {
    if (activeTab === "All") {
      return categories.flatMap((category) => category.options);
    }
    const category = categories.find((cat) => cat.name === activeTab);
    return category ? category.options : [];
  };

  return (
    <SelectBoxContainer>
      <InputContainer onClick={() => setShowOptions(!showOptions)}>
        {selectedOptions
          .split(", ")
          .filter((option) => option.trim() !== "")
          .map((option) => (
            <CustomBadge key={option}>
              {option}
              <RemoveButton
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the container from toggling the dropdown
                  handleRemoveOption(option);
                }}
              >
                x
              </RemoveButton>
            </CustomBadge>
          ))}
      </InputContainer>
      <DropdownContainer show={showOptions}>
        <Tabs>
          <Tab
            onClick={() => setActiveTab("All")}
            isActive={activeTab === "All"}
          >
            All
          </Tab>
          {categories.map((category) => (
            <Tab
              key={category.name}
              onClick={() => setActiveTab(category.name)}
              isActive={activeTab === category.name}
            >
              {category.name}
            </Tab>
          ))}
        </Tabs>
        <OptionContainer>
          {getOptionsForActiveTab().map((option) => (
            <Option
              key={option}
              onClick={() => handleOptionClick(option)}
              selected={selectedOptions.includes(option)}
            >
              {option}
              {selectedOptions.includes(option) && <TickIcon />}
            </Option>
          ))}
        </OptionContainer>
      </DropdownContainer>
    </SelectBoxContainer>
  );
};

export default SelectBox;
