<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <Task
                v-for="(task, i) in tasks"
                :key="task.name" :task="task"
                @taskDeleted="$emit('taskDeleted', i, task)"
                @taskStateChanged="$emit('taskStateChanged', i)"
            ></Task>
        </template>
        <p class="no-task" v-else>
            Sua vida esta em dia :) !
        </p>
    </div>
</template>

<script>
import Task from "./Task";

    export default {
        components: { Task },
        props: {
            tasks: { type: Array, required: true }
        }
    }
</script>

<style>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task {
        margin: 10px;
    }

    .no-task {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>