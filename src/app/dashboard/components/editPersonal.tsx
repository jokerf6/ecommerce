"use client";
import React, { Component } from "react";
import { Modal, Button } from "bootstrap-4-react";

export default function EditPersonal() {
  return (
    <div dir="rtl">
      {/* Button trigger Modal */}

      {/* Modal */}
      <Modal id="exampleModal2" fade>
        <Modal.Dialog centered lg>
          <Modal.Content>
            <Modal.Header className="flex justify-between  w-full  items-center">
              <Modal.Title>الملف الشخصي</Modal.Title>
              <Modal.Close className=" absolute left-0">
                <span aria-hidden="true">&times;</span>
              </Modal.Close>
            </Modal.Header>
            <Modal.Body>
              <div className=" w-full flex flex-col gap-2 text-start">
                <div className=" w-full flex">
                  <input
                    className="  outline-none border-2 border-slate-300 px-2 py-3 w-full"
                    placeholder="الاسم الاول"
                    value="فهد عبد الحكيم"
                  />
                  <input
                    className=" w-full  outline-none border-2 border-slate-300 px-2 py-3 mr-1"
                    placeholder="الاسم الاول"
                    value="سعيد"
                  />
                </div>

                <input
                  className=" w-full outline-none border-2 border-slate-300 px-2 py-3"
                  disabled
                  placeholder="الاسم الاول"
                  value="fhakem75@gmail.com"
                />
                <span className=" text-sm text-slate-400">
                  لايمكن تغير ايميل الدخول
                </span>
                <input
                  className=" w-full outline-none border-2 border-slate-300 px-2 py-3"
                  placeholder="الاسم الاول"
                  value="01148478628"
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
