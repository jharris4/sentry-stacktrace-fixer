export const stripStacktraceFilenamesBeforePrefix = (filenamePrefix, options = {}) => event => {
    const { shouldUpdateEvent = () => true } = options;

    const isObject = o => o && typeof o === "object";
    const exception = isObject(event) && event.exception && event.exception.values && event.exception.values[0];
    let frames = (isObject(exception) && exception.stacktrace && exception.stacktrace.frames) || [];
    if (shouldUpdateEvent(event, exception, frames) && frames && frames.length > 0) {
        const stripBeforePrefix = filename => {
            const prefixIndex = filename.lastIndexOf(filenamePrefix);
            if (prefixIndex !== -1) {
                filename = filename.substring(prefixIndex);
            }
            return filename;
        };

        frames = frames.map(frame => {
            if (isObject(frame) && frame.filename) {
                return {
                    ...frame,
                    filename: stripBeforePrefix(frame.filename)
                };
            } else {
                return frame;
            }
        });

        return {
            ...event,
            exception: {
                ...exception,
                stacktrace: {
                    ...exception.stacktrace,
                    frames
                }
            }
        };
    }
    return event;
};