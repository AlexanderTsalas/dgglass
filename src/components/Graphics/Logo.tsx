import React from 'react'

export const Logo = () => (
    <div className="logo">
        {/* Replace with actual logo or dynamic fetch if possible, but for admin static is safer */}
        <img src="/logo.png" alt="DG Glass" style={{ maxHeight: '50px' }} />
    </div>
)

export const Icon = () => (
    <div className="icon">
        <img src="/favicon.ico" alt="DG Glass" style={{ maxHeight: '30px' }} />
    </div>
)
