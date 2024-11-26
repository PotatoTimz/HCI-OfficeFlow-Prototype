const taskManager1 = $("#taskManager1");
const taskManager2 = $("#taskManager2");

const taskChart = $("#taskChart");

const tasks1 = [
  {
    taskName: "Task #1: Coffee Machine Check",
    taskDesc: "Check if the coffee machine is working",
    completed: false,
  },
  {
    taskName: "Task #2: Lights Turn-Off",
    taskDesc: "Ensure all the lights are turned off",
    completed: true,
  },
  {
    taskName: "Task #3: Meeting Room Setup",
    taskDesc: "Prepare the meeting room for the presentation",
    completed: true,
  },
  {
    taskName: "Task #4: File Organization",
    taskDesc: "Organize the files on the shared drive",
    completed: true,
  },
  {
    taskName: "Task #5: Email Response",
    taskDesc: "Respond to all urgent emails",
    completed: false,
  },
  {
    taskName: "Task #6: Project Tool Update",
    taskDesc: "Update the project management tool",
    completed: false,
  },
  {
    taskName: "Task #7: Office Supplies Inventory",
    taskDesc: "Check inventory levels for office supplies",
    completed: false,
  },
  {
    taskName: "Task #8: Team Meeting Schedule",
    taskDesc: "Schedule team meeting for next week",
    completed: false,
  },
  {
    taskName: "Task #9: Weekly Report Preparation",
    taskDesc: "Prepare weekly progress report",
    completed: false,
  },
  {
    taskName: "Task #10: Document Backup",
    taskDesc: "Backup important documents to cloud storage",
    completed: true,
  },
];

const tasks2 = [
  {
    taskName: "Task #1: Weekly Team Meeting",
    taskDesc:
      "Organize and conduct the weekly team meeting to discuss project updates",
    completed: true,
  },
  {
    taskName: "Task #2: Website Maintenance",
    taskDesc: "Perform regular maintenance and updates on the company website",
    completed: true,
  },
  {
    taskName: "Task #3: Client Invoice Generation",
    taskDesc: "Generate and send invoices to clients for completed services",
    completed: false,
  },
  {
    taskName: "Task #4: Social Media Post Scheduling",
    taskDesc:
      "Schedule posts for the upcoming week on company social media accounts",
    completed: false,
  },
  {
    taskName: "Task #5: Monthly Performance Report",
    taskDesc:
      "Prepare and submit the monthly performance report to the management team",
    completed: false,
  },
];

const generateTaskChart = (tasks) => {
  let taskHTML = "";
  tasks.map((task) => {
    taskHTML += `<div class="taskCard rounded">
                        <div class="fs-5 fw-bold text-decoration-underline my-1 text-center text-white taskCardName">
                        ${task.taskName}
                        </div>
                        <div class="fs-6 fw-medium text-center text-white taskCardDesc px-1">
                        ${task.taskDesc}
                        </div>
                        <div class="text-center mt-4 pb-4">
                            <input type="checkbox"
                                class="fs-1 text-center" ${
                                  task.completed ? "checked" : ""
                                }/>
                        </div>
                    </div>
        `;
  });

  return taskHTML;
};

taskManager1.on("click", () => {
  disableAllPanels();
  taskManagerMenu.removeClass("toggleOff");

  const generatedTasks = generateTaskChart(tasks1);
  const generatedChatName = generateChatName("task", "Daily-Tasks");

  taskChart.html(generatedTasks);
  chatName.html(generatedChatName);
});

taskManager2.on("click", () => {
  disableAllPanels();
  taskManagerMenu.removeClass("toggleOff");

  const generatedTasks = generateTaskChart(tasks2);
  const generatedChatName = generateChatName("task", "Monthly-Tasks");

  taskChart.html(generatedTasks);
  chatName.html(generatedChatName);
});
