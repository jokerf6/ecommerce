"use client";

import React, { Component } from "react";
import { Modal, Button } from "bootstrap-4-react";

export default function EditAddress() {
  return (
    <div dir="rtl">
      {/* Button trigger Modal */}

      {/* Modal */}
      <Modal id="exampleModal4" fade>
        <Modal.Dialog centered lg>
          <Modal.Content>
            <Modal.Header className="flex justify-between  w-full  items-center">
              <Modal.Title>العنوان</Modal.Title>
              <Modal.Close className=" absolute left-0">
                <span aria-hidden="true">&times;</span>
              </Modal.Close>
            </Modal.Header>
            <Modal.Body>
              <div className=" w-full flex flex-col gap-2 text-start">
                <div className=" w-full flex">
                  <input
                    className="  outline-none border-2 border-slate-300 px-2 py-3 w-full"
                    value="الاسم الاول"
                  />
                  <input
                    className=" w-full  outline-none border-2 border-slate-300 px-2 py-3 mr-1"
                    value="الاسم الثاني"
                  />
                </div>
                <input
                  className=" w-full outline-none border-2 border-slate-300 px-2 py-3"
                  value="المحافظه"
                />

                <input
                  className=" w-full outline-none border-2 border-slate-300 px-2 py-3"
                  value="العنوان"
                />

                <input
                  className=" w-full outline-none border-2 border-slate-300 px-2 py-3"
                  value="رقم الهاتف"
                />
              </div>
            </Modal.Body>
            <Modal.Footer className="flex gap-2 flex-row-reverse">
              <Button secondary data-dismiss="modal">
                اغلاق
              </Button>
              <Button primary>حفظ المعلومات</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}
