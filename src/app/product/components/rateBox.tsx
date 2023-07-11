"use client";
import React, { Component } from "react";
import { Modal, Button } from "bootstrap-4-react";
import StarRating2 from "./startRating";

export default function RateBox() {
  return (
    <div dir="rtl">
      {/* Button trigger Modal */}

      {/* Modal */}
      <Modal id="exampleModal" fade>
        <Modal.Dialog centered>
          <Modal.Content>
            <Modal.Header className="flex justify-between  w-full  items-center">
              <Modal.Title>قيم المنتج</Modal.Title>
              <Modal.Close className=" absolute left-0">
                <span aria-hidden="true">&times;</span>
              </Modal.Close>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className=" w-fit">
                  <StarRating2 />
                </div>
                <input
                  className=" w-full outline-none border-2 border-slate-300 px-2 py-3"
                  placeholder="ماتقييمك للمنتج ؟"
                />
              </div>
            </Modal.Body>
            <Modal.Footer className="flex gap-2 flex-row-reverse">
              <Button secondary data-dismiss="modal">
                اغلاق
              </Button>
              <Button primary>حفظ التقييم</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}
