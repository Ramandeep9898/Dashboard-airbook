import React from 'react'
import { TABLE_CONFIG } from '../../Dashboard.config'
import { ColumnFilter } from '../ColumnFilter'

export const TableHead = () => {
    return (
        <div className="flex flex-row w-full sticky top-0 ">
            {TABLE_CONFIG.map(({ title, filterElement, key, chips }) => (
                <ColumnFilter key={key} columnTitle={title} filterElement={filterElement} id={key} chips={chips?.slice(0, 4)} />
            ))}
        </div>
    )
}
