import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const gradeOptions = [
  "Kindergarten",
  "Primary (1–5)",
  "Secondary (6–8)",
  "Higher Secondary (9–10)",
  "+2 Level",
  "Bachelor or Above",
] as const;

const employmentTypeOptions = [
  "Full-Time",
  "Part_TIme",
  "Temperory/Contract",
] as const;

type GradeLevel = (typeof gradeOptions)[number];
type EmploymentType = (typeof employmentTypeOptions)[number];

interface Props {
  onClick: () => void;
  filterOpen: boolean;
}

const JobFilterOverLay: React.FC<Props> = ({ onClick, filterOpen }) => {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [selectedGrades, setSelectedGrades] = useState<GradeLevel[]>([]);
  const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState<
    EmploymentType[]
  >([]);

  const toggleGrade = (grade: GradeLevel) => {
    setSelectedGrades((prev) =>
      prev.includes(grade) ? prev.filter((g) => g !== grade) : [...prev, grade]
    );
  };

  const toggleEmploymentType = (type: EmploymentType) => {
    setSelectedEmploymentTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      keywords,
      location,
      selectedGrades,
      selectedEmploymentTypes,
    });
  };

  if (!filterOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 z-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white relative w-[550px] h-[600px] overflow-y-auto rounded-md p-6">
        <button
          onClick={onClick}
          className="absolute top-5 right-3 p-2 bg-[#e2e5e9] rounded-full text-black cursor-pointer"
          aria-label="Close filter overlay"
        >
          <RxCross1 />
        </button>

        <h2 className="text-center text-black text-lg mt-5 mb-6">
          Filter Job Opening
        </h2>
        <hr className="border-t border-gray-400 mb-6" />

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Keywords */}
          <div>
            <label
              htmlFor="keywords"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Job Title / Keywords
            </label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              placeholder="e.g., Mathematics Teacher"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="block bg-[#f7f7f7] border border-[#e4e4e7] rounded-sm w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter city or district"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="block bg-[#f7f7f7] border border-[#e4e4e7] rounded-sm w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
            />
          </div>

          {/* Grade Level */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Grade Level
            </label>
            <div className="grid grid-cols-3 gap-3">
              {gradeOptions.map((grade) => (
                <label
                  key={grade}
                  className="flex items-center justify-between bg-[#f7f7f7]
                   border border-[#e4e4e7] rounded-sm px-4 py-2 text-sm
                   text-gray-800 cursor-pointer hover:border-blue-400"
                >
                  <span>{grade}</span>
                  <input
                    type="checkbox"
                    value={grade}
                    checked={selectedGrades.includes(grade)}
                    onChange={() => toggleGrade(grade)}
                    className="form-checkbox h-5 w-5 accent-[#0070ef] text-blue-600 focus:ring-0 rounded-sm"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Employment Type */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Employment Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              {employmentTypeOptions.map((type) => (
                <label
                  key={type}
                  className="flex items-center justify-between bg-[#f7f7f7] border border-[#e4e4e7] rounded-sm px-4 py-2 text-sm text-gray-800 cursor-pointer hover:border-blue-400"
                >
                  <span>{type}</span>
                  <input
                    type="checkbox"
                    value={type}
                    checked={selectedEmploymentTypes.includes(type)}
                    onChange={() => toggleEmploymentType(type)}
                    className="form-checkbox text-blue-600"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#0070ef] text-white py-2 px-4 rounded-lg cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobFilterOverLay;
