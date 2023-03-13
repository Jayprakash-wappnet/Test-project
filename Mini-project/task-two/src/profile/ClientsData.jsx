import React from "react";
import client from "../data/client";
import { GrView } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";

function ClientsData() {
  return (
    <div className="flex flex-col bg-white">
      <table>
        <thead>
          <tr>
            <th>
              <input className="flex h-5 mx-4 mt-[24px]" type="checkbox" />
            </th>
            <th>Client Name</th>
            <th>Phone Number</th>
            <th>Agent Name</th>
            <th>Latest Activities</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {client.map((data) => {
            return (
              <tr key={data.id}>
                <td>
                  <input className="flex h-5 mx-2 mt-[24px]" type="checkbox" />
                </td>
                <td>
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <img
                        className="flex rounded-full h-10 mt-[16px] "
                        src={data.clientProfile}
                        alt="Not found"
                      />
                    </div>
                    <div className="flex flex-col items-start ">
                      <span className="mt-4 mx-2 text-4">
                        {data.clientName}
                      </span>
                      <div className="flex flex-row">
                        <span className="mx-2 text-[14px]">
                          debbie.baker@example.com
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex flex-row">
                    <img
                      className="rounded-full h-6  mx-2"
                      src="../assets/turkey.png"
                      alt="Not found"
                    />
                    <span className="text-[12px] text-[#555B67]">
                      +90 552 489 8277
                    </span>
                  </div>
                </td>
                <td>
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <img
                        className="flex rounded-full h-10 mt-[16px] mx-2"
                        src="../assets/profile_4.jpg"
                        alt="Not found"
                      />
                    </div>
                    <div className="flex flex-col items-start ">
                      <span className="mt-4 mx-2 text-4">Courtney Henry</span>
                      <div className="flex flex-row">
                        <span className="mx-2 text-[14px]">
                          courtney@example.com{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="mx-2">{data.activities}</td>
                <td>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                      <GrView />
                      <BiEdit />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ClientsData;
