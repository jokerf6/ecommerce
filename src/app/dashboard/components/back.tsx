"use client";

import React, { Component } from "react";
import { Modal, Button } from "bootstrap-4-react";

export default function Back() {
  return (
    <div dir="rtl">
      {/* Button trigger Modal */}

      {/* Modal */}
      <Modal id="exampleModal5" fade>
        <Modal.Dialog centered lg>
          <Modal.Content>
            <Modal.Header className="flex justify-between  w-full  items-center">
              <Modal.Title>استرجاع</Modal.Title>
              <Modal.Close className=" absolute left-0">
                <span aria-hidden="true">&times;</span>
              </Modal.Close>
            </Modal.Header>
            <Modal.Body>
              <div className=" w-full flex flex-col gap-2 text-start">
                <input
                  className=" w-full outline-none border-2 border-slate-300 px-2 py-3"
                  placeholder="سبب الاسترجاع"
                />
              </div>
            </Modal.Body>
            <Modal.Footer className="flex gap-2 flex-row-reverse">
              <Button secondary data-dismiss="modal">
                تراجع
              </Button>
              <Button primary>استرجاع</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}
