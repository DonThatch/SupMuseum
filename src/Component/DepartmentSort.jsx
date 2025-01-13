import { useEffect, useState } from "react";

function DepartmentSort({ onDepartmentSelect }) {
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [departmentData, setDepartmentData] = useState([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments");
                if (!response.ok) {
                    throw new Error("Network response was not OK");
                }
                const jsonData = await response.json();
                console.log(jsonData.departments);
                setDepartmentData(jsonData.departments);
            } catch (error) {

            }
        }
        fetchDepartments();
    }, []);

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedDepartment(selectedValue);
        onDepartmentSelect(selectedValue);
    };

    return (
        <select name="department" className="sort" value={selectedDepartment} onChange={handleSelectChange}>
            <option value="" disabled>Department</option>
            {departmentData.map((department) => (
                <option key={department.departmentId} value={department.departmentId}>
                    {department.displayName}
                </option>
            ))}
        </select>
    );
}

export default DepartmentSort;
