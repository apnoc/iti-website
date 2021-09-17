import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";




const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

const index = () => (
  <div className=" p-5 container-fluid">
    {/* <section>
      <OrganizationChart />
    </section> */}
    <Tree
      lineWidth={"2px"}
      lineColor={"green"}
      lineBorderRadius={"20px"}
      label={<StyledNode>Principal/Superintendent</StyledNode>}
    >
      <TreeNode label={<StyledNode>Vice Principal</StyledNode>}>
        <TreeNode
          label={
            <StyledNode>
              Group Instructor <br /> Trainning Officer
            </StyledNode>
          }
        >
          <TreeNode label={<StyledNode>Assistant Traing Ofiicer</StyledNode>}>
            <TreeNode
              label={<StyledNode>Instructor For Allied Trade</StyledNode>}
            />
          </TreeNode>
        </TreeNode>
        <TreeNode label={<StyledNode>Office Support</StyledNode>}>
          <TreeNode label={<StyledNode>Accountant Staff</StyledNode>}>
            <TreeNode label={<StyledNode>Supporting Staff</StyledNode>} />
          </TreeNode>
        </TreeNode>
        <TreeNode
          label={<StyledNode>Hostel Supporttant Officer</StyledNode>}
        ></TreeNode>
        <TreeNode label={<StyledNode>Store Support</StyledNode>}>
          {/* <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
        <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
        <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
      </TreeNode> */}
        </TreeNode>
        <TreeNode label={<StyledNode>Medical Officer</StyledNode>}>
          {/* <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
      <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} /> */}
        </TreeNode>
      </TreeNode>
    </Tree>
  </div>
);
export default index;

