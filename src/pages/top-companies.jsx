import React from "react";

const TopCompanies = ({ companies = [] }) => {
    return (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="space-y-10 mt-25 mb-10">
                {companies.map((company, index) => (
                    <div
                        key={company._id || index}
                        className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white"
                    >
                        {/* Top Section */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 border-b border-gray-200 gap-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
                                {company.logo && (
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-md flex-shrink-0"
                                    />
                                )}
                                <div className="flex-1">
                                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                        {index + 1}. {company.name}
                                    </h2>
                                    {company.description && (
                                        <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                                            {company.description}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {company.website && (
                                <a
                                    href={company.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 md:mt-0 bg-red-600 text-white px-4 sm:px-5 py-2 rounded-md font-medium text-sm sm:text-base hover:bg-red-700 transition text-center"
                                >
                                    Go To Website
                                </a>
                            )}
                        </div>

                        {/* Services */}
                        {company.services?.length > 0 && (
                            <div className="px-6 md:px-8 py-4 border-b border-gray-200">
                                <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                                    Services
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {company.services.map((service, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-100 text-gray-700 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border border-gray-200"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Details */}
                        <div className="overflow-x-auto">
                            <div className="min-w-[600px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6 md:p-8 text-sm sm:text-base text-gray-700">
                                {company.founded && (
                                    <div>
                                        <p className="font-semibold text-gray-900">Founded</p>
                                        <p>{company.founded}</p>
                                    </div>
                                )}
                                {company.employees && (
                                    <div>
                                        <p className="font-semibold text-gray-900">Employees</p>
                                        <p>{company.employees}</p>
                                    </div>
                                )}
                                {company.hourly_rate && (
                                    <div>
                                        <p className="font-semibold text-gray-900">Hourly Rates</p>
                                        <p>{company.hourly_rate}</p>
                                    </div>
                                )}
                                {company.rating && (
                                    <div>
                                        <p className="font-semibold text-gray-900">Clutch Rating</p>
                                        <p>{company.rating}</p>
                                    </div>
                                )}
                                {company.email && (
                                    <div>
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <p className="text-blue-600 break-all">{company.email}</p>
                                    </div>
                                )}
                                {company.phone && (
                                    <div>
                                        <p className="font-semibold text-gray-900">Contact</p>
                                        <p>{company.phone}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCompanies;
