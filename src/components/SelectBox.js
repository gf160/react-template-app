import React from 'react'

export default function SelectBox({
    templateId, setTemplateId
}) {
    const changeTemplate = (e) => {
        setTemplateId(e.target.value);
    }
  return (
    <select onChange={changeTemplate}>
        <option key="template1" value="template1" select="true">template1</option>
        <option key="template2" value="template2">template2</option>
    </select>
  )
}
