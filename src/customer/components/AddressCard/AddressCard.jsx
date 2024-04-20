import React from "react";

function AddressCard({address}) {
  return (
    <div className="border rounded-md shadow-md p-4">
      <div className="space-y-3">
        <p className="font-semibold text-lg">{address?.firstName}+" "+{address?.lastName}</p>
        <p className="text-gray-600">{address?.streetAddress}+" "+{address?.zipCode}</p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
